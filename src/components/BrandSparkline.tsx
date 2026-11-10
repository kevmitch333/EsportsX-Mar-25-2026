import React, { useState, useId } from 'react';
import * as d3 from 'd3';
import { motion } from 'motion/react';
import { TrendingUp, Activity, Flame } from 'lucide-react';
import { Brand } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface BrandSparklineProps {
  brand?: Brand;
  data?: number[];
  color?: string;
  engagementScore?: number;
  growthRate?: string;
  metricLabel?: string;
  compact?: boolean;
}

// Deterministic generator for consistent, realistic trajectories when not hardcoded
function getDeterministicMetrics(brand?: Brand) {
  if (!brand) {
    return {
      score: 88,
      rate: '+74% YoY',
      trend: [38, 45, 52, 60, 68, 80, 92],
      label: 'Growth Momentum',
    };
  }

  // If brand has explicit custom fields
  if (brand.growthTrajectory && brand.engagementScore) {
    return {
      score: brand.engagementScore,
      rate: brand.growthTrajectory.rate,
      trend: brand.growthTrajectory.trend,
      label: brand.growthTrajectory.metricLabel || 'Engagement',
    };
  }

  // Derive stable metrics based on brand ID and category
  let hash = 0;
  for (let i = 0; i < brand.id.length; i++) {
    hash = (hash << 5) - hash + brand.id.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash);

  // Category archetype configuration
  let baseScore = 82;
  let baseGrowth = 65;
  let categoryLabel = 'Adoption Index';

  switch (brand.category) {
    case 'core':
      baseScore = 93;
      baseGrowth = 110;
      categoryLabel = 'AI Engine Growth';
      break;
    case 'compete':
      baseScore = 90;
      baseGrowth = 85;
      categoryLabel = 'Tournament Scale';
      break;
    case 'edu':
      baseScore = 87;
      baseGrowth = 75;
      categoryLabel = 'Campus Reach';
      break;
    case 'regional':
      baseScore = 85;
      baseGrowth = 60;
      categoryLabel = 'Community Density';
      break;
    case 'infra':
      baseScore = 88;
      baseGrowth = 70;
      categoryLabel = 'B2B Utilization';
      break;
    case 'history':
      baseScore = 96;
      baseGrowth = 95;
      categoryLabel = 'Global Impact';
      break;
    default:
      baseScore = 84;
      baseGrowth = 65;
      categoryLabel = 'Market Traction';
  }

  // Variance between 0 and 7
  const scoreVar = seed % 8;
  const growthVar = (seed * 3) % 25;
  const score = Math.min(99, baseScore + (brand.featured ? 4 : 0) + (scoreVar - 3));
  const growthRate = `+${baseGrowth + growthVar}% YoY`;

  // Generate 7 progressive monthly trend values
  const startVal = 30 + (seed % 20);
  const targetVal = startVal + 40 + (seed % 35);
  const trend: number[] = [];
  for (let step = 0; step < 7; step++) {
    const progress = step / 6;
    // Slight curve + tiny perturbation
    const curve = Math.pow(progress, 0.85);
    const jitter = step === 0 || step === 6 ? 0 : ((seed + step * 7) % 5) - 2;
    const val = Math.round(startVal + (targetVal - startVal) * curve + jitter);
    trend.push(Math.max(20, val));
  }

  return {
    score,
    rate: growthRate,
    trend,
    label: brand.growthTrajectory?.metricLabel || categoryLabel,
  };
}

export const BrandSparkline: React.FC<BrandSparklineProps> = ({
  brand,
  data,
  color,
  engagementScore,
  growthRate,
  metricLabel,
  compact = false,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const rawId = useId();
  const { t } = useLanguage();
  const gradId = `spark-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const resolved = getDeterministicMetrics(brand);
  const chartData = data || resolved.trend;
  const effectiveColor = color || brand?.color || '#00ff88';
  const effectiveScore = engagementScore ?? resolved.score;
  const effectiveGrowth = growthRate || resolved.rate;
  const effectiveLabel = metricLabel || resolved.label;

  const width = compact ? 110 : 140;
  const height = compact ? 34 : 38;
  const margin = { top: 4, right: 6, bottom: 4, left: 6 };

  // d3 scales
  const minVal = Math.min(...chartData);
  const maxVal = Math.max(...chartData);
  const padding = (maxVal - minVal) * 0.15 || 4;

  const xScale = d3
    .scaleLinear()
    .domain([0, chartData.length - 1])
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain([minVal - padding, maxVal + padding])
    .range([height - margin.bottom, margin.top]);

  // d3 line & area generators with smooth monotone curve
  const lineGenerator = d3
    .line<number>()
    .x((_, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(d3.curveMonotoneX);

  const areaGenerator = d3
    .area<number>()
    .x((_, i) => xScale(i))
    .y0(height - margin.bottom)
    .y1((d) => yScale(d))
    .curve(d3.curveMonotoneX);

  const pathD = lineGenerator(chartData) || '';
  const areaD = areaGenerator(chartData) || '';

  const lastIndex = chartData.length - 1;
  const lastX = xScale(lastIndex);
  const lastY = yScale(chartData[lastIndex]);

  return (
    <div className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 backdrop-blur-sm group/spark hover:border-white/20 transition-colors">
      {/* Top row: Indicator Label & Trajectory Rate */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Activity className="w-3 h-3 text-white/40 shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 truncate">
            {effectiveLabel}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/5">
          <TrendingUp className="w-3 h-3" style={{ color: effectiveColor }} />
          <span className="font-mono text-[10px] font-bold tracking-tight" style={{ color: effectiveColor }}>
            {effectiveGrowth}
          </span>
        </div>
      </div>

      {/* Center row: Progress Bar + d3 Sparkline */}
      <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
        {/* Community Engagement Score & Progress Bar */}
        <div className="space-y-1.5 min-w-0">
          <div className="flex items-center justify-between font-mono text-[9px]">
            <span className="text-white/40 flex items-center gap-1">
              <Flame className="w-2.5 h-2.5 text-white/30" />
              {t.sparkline.engagement}
            </span>
            <span className="font-bold tracking-wider text-white/80">
              {effectiveScore}
              <span className="text-white/30 font-normal">/100</span>
            </span>
          </div>

          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(100, Math.max(12, effectiveScore))}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full relative"
              style={{ backgroundColor: effectiveColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-60" />
            </motion.div>
          </div>

          <div className="text-[8.5px] font-mono text-white/35 truncate">
            {hoveredIdx !== null ? (
              <span className="text-white/70">
                P{hoveredIdx + 1} {t.sparkline.trajectoryLabel}: <strong className="text-white">{chartData[hoveredIdx]} {t.sparkline.trajectorySuffix}</strong>
              </span>
            ) : (
              t.sparkline.velocity
            )}
          </div>
        </div>

        {/* d3 Mini Sparkline Chart */}
        <div className="relative shrink-0 flex items-center justify-center pl-1">
          <svg
            width={width}
            height={height}
            className="overflow-visible select-none"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={effectiveColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={effectiveColor} stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* d3 Area Fill */}
            <path d={areaD} fill={`url(#${gradId})`} />

            {/* d3 Smooth Monotone Line */}
            <path
              d={pathD}
              fill="none"
              stroke={effectiveColor}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Pulsing endpoint dot */}
            <circle
              cx={lastX}
              cy={lastY}
              r="2.5"
              fill={effectiveColor}
              className="animate-pulse"
            />
            <circle
              cx={lastX}
              cy={lastY}
              r="5.5"
              fill="none"
              stroke={effectiveColor}
              strokeWidth="0.75"
              strokeOpacity="0.4"
            />

            {/* Interactive Data Point Touch / Hover Circles */}
            {chartData.map((val, idx) => {
              const cx = xScale(idx);
              const cy = yScale(val);
              const isHovered = hoveredIdx === idx;
              return (
                <g key={idx}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="8"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredIdx(idx)}
                  />
                  {isHovered && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="3.5"
                      fill="#ffffff"
                      stroke={effectiveColor}
                      strokeWidth="2"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
