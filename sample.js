const stepByStepArr = [
  {
    head: 'STEP-BY-STEP',
  },
  {
    head: 'How does it work',
  },
  {
    head: 'Make a flexible data structure in 2 minutes.<br> Use our powerfull features to customize your API',
  },
];

function headsParg(head1, head2, head3) {
  const header1 = document.createElement(head1);
  stepByStepHeadings.appendChild(header1);
  const header2 = document.createElement(head2);
  stepByStepHeadings.appendChild(header2);
  const header3 = document.createElement(head3);
  stepByStepHeadings.appendChild(header3);

  return [header1, header2, header3];
}
console.log(headsParg('h5', 'h1', 'h3'));
