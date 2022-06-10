// function smartPeople() {
//     var ul = document.createElement ('ul');
   
//     const names = [' Dwayne Micheal Carter' , 'Gabriella Wilson' , 'Nikki Manaj ', 'j Cole'];
    
    
// }
 


// var objecthtml = {
// 	id : 1,
// 	html: '<div>Oh yeah</div>',
// 	css: 'colonne'
// }

// let block =  document.createElement("div");
// block.innerHTML = objecthtml.html;

// document.body.appendChild(block);

 


// function smartPeople() {
//     const names = [' Dwayne Micheal Carter' , 'Gabriella Wilson' , 'Nikki Manaj ', 'j Cole'];

//     var ul = document.createElement ('ul')



    
// }


//  var arr=['a','b','c','d','e'];
// // //First I create a ul element
//  var list=document.createElement('ul');

//  function smartPeople()
// // //Then I append it at the body
//  document.getElementsByTagName('body')[0].appendChild(list);
// // //Via for loop for every value in the arr
// // //I create a li element I set the array value as innerHTML
// // //and at final I append it at the ul
//  for(var i=0;i<arr.length;i++){
//    var li=document.createElement('li');
//    li.innerHTML=arr[i];
//    list.appendChild(li);
//  }



names = [' Dwayne Micheal Carter' , 'Gabriella Wilson' , 'Nikki Manaj ', 'j Cole'];
const wrapper = document.createElement('ul');
document.getElementsByTagName('body')[0].appendChild(wrapper);
function smartPeople() {
names.forEach(item => {
  var list = document.createElement('li')
  list.innerHTML += item;
  wrapper.appendChild(list);
});
}
smartPeople();























