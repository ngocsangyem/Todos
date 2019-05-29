function btnRipple(btn) {
	var buttonRipple = document.getElementsByClassName(btn);
	Array.prototype.forEach.call(buttonRipple , function(element){
		element.addEventListener('click', (e) => {
			let ripple = document.createElement('div');
			let x, y;
			var rect = e.target.getBoundingClientRect()
			// Lấy tọa độ của button
			x = e.clientX - rect.left;
			y = e.clientY - rect.top;
			ripple.classList.add('ripple');
			ripple.style.top = y + 'px';
			ripple.style.left = x + 'px';
			// console.log(x);
			element.appendChild(ripple);
			window.setTimeout(function () {
				element.removeChild(ripple)
			}, 1000);
		});
	})
}
