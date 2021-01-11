let copyRtlButtons = document.querySelectorAll('.trigger-copy-rtl');
let copyLtrButtons = document.querySelectorAll('.trigger-copy-ltr');

for(let btn of copyRtlButtons)
  btn.addEventListener('click', function(event) {
    copyTextToClipboard(`⁧`);
    alert("Copied!");
  });

for(let btn of copyLtrButtons)
  btn.addEventListener('click', function(event) {
    copyTextToClipboard(`⁦`);
    alert("Copied!");
  });
