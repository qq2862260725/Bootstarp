window.onload = function(){
	var li = document.querySelectorAll('.two');
	
	for (var i = li.length - 1; i >= 0; i--) {
		li[i].index = i;
		li[i].onclick = function(){
			for (var j = li.length - 1; j >= 0; j--) {
				li[j].className = 'two';
			}
			li[this.index].className = 'two active';
		}
	}
}