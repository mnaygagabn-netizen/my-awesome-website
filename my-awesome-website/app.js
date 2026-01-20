const btn = document.getElementById("downloadBtn");
const linkInput = document.getElementById("linkInput");
const preview = document.getElementById("preview");

btn.onclick = () => {
  const link = linkInput.value;
  if (!link.includes("tiktok.com")) {
    preview.innerHTML = "<p style='color:red;'>رابط غير صحيح</p>";
    return;
  }

  preview.innerHTML = `
    <p>معاينة الفيديو 👇</p>
    <video controls width="100%">
      <source src="" type="video/mp4">
    </video>
    <p style="opacity:.7;">(هذه معاينة وهمية للواجهة)</p>
  `;
};
