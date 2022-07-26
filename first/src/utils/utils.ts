export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function alertButtonAction(){
  // var button = document.querySelector("button");
  // handleAlertClick();
  console.log("ina lert");
  var alert = document.querySelector("my-alert");
  return alert.text = "LOUD NOISES"
}

export function handleAlertClick(){
  var alert = document.querySelector("my-alert");
  alert.text = "LOUD NOISES"
}