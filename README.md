# Colouir 🎨

Colouir is a lightweight color palette software, designed for a direct, efficient, smooth, and elegant color picking experience.
It renders given palette files onto a color board, allowing you to explore and select colors quickly and intuitively.

## ✨ Features
	•	Palette visualization: Render your palette files directly onto the board — what you see is what you get.
	•	Quick color picking: One click to copy or apply a color, no extra steps required.
	•	Smooth interaction: From loading to selection, everything feels natural and fluid.
	•	Elegant design: Minimal UI that highlights the beauty of colors without distraction.

## 📂 Supported color formats
	•	Hex
	•	RGB / HSL / CMYK
	•	OKLab / OKLCH
	•	More formats coming soon.

## 🧭 Design philosophy
	•	Direct: Intuitive and self-explanatory interaction.
	•	Efficient: Get the colors you need with minimal effort.
	•	Smooth: Fluid experience from start to finish.
	•	Elegant: Minimalist interface focused solely on colors.

## 🤝 How to contribute a new palette

You can extend Colouir by adding your own palettes:
	1.	Place a new JSON file inside the public/data folder, e.g. myPalette.json.
Example format:

```json
[
	{
		"name": "撫子",
		"color": "NADESHIKO",
		"hex": "#DC9FB4"
  	},
	// more colors...
]
```

	2.	Open public/data/PaletteList.json and add an entry for your new palette.
	3.   Submit a pull request.

Once added, your palette will be rendered automatically in the app.