<template>
<div id="about">


<header>
  <div>
    <h1>Colouir <span style="opacity:.9;font-size:14px;margin-left:8px">🎨</span></h1>
    <p class="lead">Colouir is a lightweight color palette app crafted for a <strong>direct</strong>, <strong>efficient</strong>, <strong>smooth</strong>, and <strong>elegant</strong> color-picking experience. It renders given palette files onto a visual color board so you can explore and select colors quickly and intuitively.</p>
  </div>
</header>

<section class="card" aria-labelledby="features">
  <h2 id="features">✨ Features</h2>
  <ul>
    <li><strong>Palette visualization</strong> — Render your palette files directly onto the board; what you see is what you get.</li>
    <li><strong>Quick color picking</strong> — One click to copy or apply a color, with no extra steps required.</li>
    <li><strong>Smooth interaction</strong> — From loading to selection, interactions feel natural and fluid.</li>
    <li><strong>Elegant design</strong> — Minimal UI that highlights the beauty of colors without distraction.</li>
  </ul>
</section>

<section class="card" aria-labelledby="formats">
  <h2 id="formats">📂 Supported color formats</h2>
  <ul>
    <li>Hex</li>
    <li>RGB / HSL / CMYK</li>
    <li>OKLab / OKLCH</li>
    <li>More formats coming soon</li>
  </ul>
</section>

<section class="card" aria-labelledby="philosophy">
  <h2 id="philosophy">🧭 Design philosophy</h2>
  <ul>
    <li><strong>Direct</strong> — Intuitive and self-explanatory interaction.</li>
    <li><strong>Efficient</strong> — Get the colors you need with minimal effort.</li>
    <li><strong>Smooth</strong> — Fluid experience from start to finish.</li>
    <li><strong>Elegant</strong> — Minimalist interface focused solely on colors.</li>
  </ul>
</section>

<section class="card" aria-labelledby="contribute">
  <h2 id="contribute">🤝 How to contribute a new palette</h2>
  <p class="muted">
    You can add your own palette locally, or contribute it back to the project on GitHub.  
    To contribute, click the <strong>GitHub</strong> button in the bottom-right corner of this site and follow the steps below:
  </p>

  <ol style="margin-left:20px;color:var(--muted)">
    <li>Fork the repository to your GitHub account.</li>
    <li>Add a JSON file inside the <code class="inline">public/data</code> folder, for example <code class="inline">myPalette.json</code>.</li>
    <li>Open <code class="inline">src/components/ColorInfos.vue</code> and add an entry to the <code class="inline">givenData</code> array in the <code class="inline">&lt;script&gt;</code> section, using the same name as your JSON file.</li>
    <li>Commit your changes and submit a Pull Request (PR).</li>
  </ol>

  <p class="muted" style="margin-top:8px">Example JSON format:</p>

  <pre><code>
    [
      {
        "name": "撫子",
        "color": "NADESHIKO",
        "hex": "#DC9FB4"
      }
      // ...
    ]
  </code></pre>

  <p class="muted" style="margin-top:10px">
    After adding the file and updating <code class="inline">givenData</code>, the new palette will be rendered automatically.  
    Once your PR is merged, your contribution will become part of Colouir. 🎉
  </p>
</section>
</div>
</template>

<style>
#about {
  position: relative;
  width: 60vw;
  margin: 0 auto;
}
</style>
