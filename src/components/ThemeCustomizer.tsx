import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const presetColors = [
  { name: "Default", hue: 0, saturation: 0 },
  { name: "Blue", hue: 220, saturation: 80 },
  { name: "Purple", hue: 270, saturation: 70 },
  { name: "Green", hue: 150, saturation: 60 },
  { name: "Red", hue: 0, saturation: 70 },
  { name: "Orange", hue: 30, saturation: 80 },
  { name: "Teal", hue: 180, saturation: 60 },
  { name: "Pink", hue: 330, saturation: 70 },
];

const ThemeCustomizer = () => {
  const [selectedHue, setSelectedHue] = useState(0);
  const [selectedSaturation, setSelectedSaturation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedHue = localStorage.getItem("theme-hue");
    const savedSaturation = localStorage.getItem("theme-saturation");
    if (savedHue && savedSaturation) {
      setSelectedHue(parseInt(savedHue));
      setSelectedSaturation(parseInt(savedSaturation));
      applyTheme(parseInt(savedHue), parseInt(savedSaturation));
    }
  }, []);

  const applyTheme = (hue: number, saturation: number) => {
    const root = document.documentElement;
    
    if (hue === 0 && saturation === 0) {
      // Reset to default black/white theme
      root.style.setProperty("--primary", "0 0% 0%");
      root.style.setProperty("--primary-foreground", "0 0% 100%");
      root.style.setProperty("--ring", "0 0% 0%");
    } else {
      // Apply custom color
      root.style.setProperty("--primary", `${hue} ${saturation}% 45%`);
      root.style.setProperty("--primary-foreground", "0 0% 100%");
      root.style.setProperty("--ring", `${hue} ${saturation}% 45%`);
    }
  };

  const handleColorSelect = (hue: number, saturation: number) => {
    setSelectedHue(hue);
    setSelectedSaturation(saturation);
    applyTheme(hue, saturation);
    localStorage.setItem("theme-hue", hue.toString());
    localStorage.setItem("theme-saturation", saturation.toString());
  };

  const handleCustomColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const { h, s } = hexToHsl(hex);
    handleColorSelect(h, s);
  };

  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hslToHex = (h: number, s: number, l: number = 45) => {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border-2 border-primary bg-background shadow-md hover:bg-accent"
          aria-label="Customize theme color"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="end" side="top">
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Theme Color</h4>
          
          {/* Preset Colors */}
          <div className="grid grid-cols-4 gap-2">
            {presetColors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color.hue, color.saturation)}
                className="h-8 w-8 rounded-full border-2 border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                style={{
                  backgroundColor:
                    color.hue === 0 && color.saturation === 0
                      ? "#000000"
                      : hslToHex(color.hue, color.saturation),
                }}
                title={color.name}
                aria-label={`Select ${color.name} theme`}
              />
            ))}
          </div>

          {/* Custom Color Picker */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Custom Color</label>
            <input
              type="color"
              onChange={handleCustomColor}
              value={hslToHex(selectedHue, selectedSaturation)}
              className="h-10 w-full cursor-pointer rounded border border-border bg-background"
              aria-label="Pick custom color"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeCustomizer;
