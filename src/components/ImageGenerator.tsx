import React, { useState } from 'react';
import { Image as ImageIcon, Loader2, Download, Maximize2 } from 'lucide-react';
import { generateImage } from '../services/gemini';
import { motion } from 'motion/react';

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<"1K" | "2K" | "4K">("1K");
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await generateImage(prompt, size);
      setImage(result);
    } catch (err) {
      console.error(err);
      setError("Failed to generate image. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-smoke border border-white/10 rounded-lg overflow-hidden flex flex-col h-[600px]">
      <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-brand-green" />
          <span className="font-mono text-xs uppercase tracking-widest text-brand-green">AI Image Forge</span>
        </div>
        <div className="flex gap-1">
          {(["1K", "2K", "4K"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-2 py-1 text-[10px] font-mono border transition-colors ${
                size === s ? 'bg-brand-green text-black border-brand-green' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center justify-center relative bg-black/40">
        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group w-full h-full flex items-center justify-center"
          >
            <img
              src={image}
              alt="Generated"
              className="max-w-full max-h-full object-contain shadow-2xl shadow-brand-green/10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a
                href={image}
                download="esportsx-ai-gen.png"
                className="p-3 bg-brand-green text-black rounded-full hover:scale-110 transition-transform"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="text-center opacity-30">
            <ImageIcon className="w-16 h-16 mx-auto mb-4" />
            <p className="text-sm font-mono uppercase tracking-widest">Awaiting Neural Synthesis</p>
          </div>
        )}

        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
            <Loader2 className="w-12 h-12 text-brand-green animate-spin mb-4" />
            <p className="text-brand-green font-mono text-xs animate-pulse uppercase tracking-[0.2em]">Synthesizing Pixels...</p>
          </div>
        )}

        {error && (
          <div className="absolute bottom-4 left-4 right-4 p-3 bg-red-500/20 border border-red-500/50 text-red-500 text-xs text-center rounded">
            {error}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/10 bg-white/5">
        <div className="flex gap-2">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the visual concept (e.g., 'Cyberpunk esports arena with neon green lighting, cinematic 8k')..."
            className="flex-1 bg-black border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-green transition-colors resize-none h-20"
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="bg-brand-green text-black px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-green/80 transition-colors font-mono text-xs uppercase font-bold"
          >
            Forge
          </button>
        </div>
      </div>
    </div>
  );
};
