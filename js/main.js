let copyRtlBtn = document.querySelector('.trigger-copy-rtl');
let copyLtrBtn = document.querySelector('.trigger-copy-ltr');

copyRtlBtn.addEventListener('click', function(event) {
  copyTextToClipboard(`⁧`);
  alert("Copied!");
});

copyLtrBtn.addEventListener('click', function(event) {
  copyTextToClipboard(`⁦`);
  alert("Copied!");
});
