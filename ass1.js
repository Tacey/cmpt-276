var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24,
  92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34,
   53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

grades.sort();

//input:

function update(){
  for(i = 0; i < 11; i++){
    var count = 0;
    for(j = grades.length - 1; j >= 0; j--){
      if(grades[j] >= document.getElementsByName("bounds")[i+1].value &&
    grades[j] <= document.getElementsByName("bounds")[i].value){
        count++;
      }
    }

    document.getElementsByClassName("bar")[i].style.width = count*40 + "px";
  }
}
