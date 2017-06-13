$(document).ready(function() {
	var stack = [];
	var OperandStack = [];
	var OperatorStack = [];
	var str = "";
	//alert("sad");
        $('button').click(function() {
            var x = $(this).attr("value");

            stacker(x);
           // alert(x);
        });

        function stacker(x) {
        	if (x !==  "=" && x!=="reset") {
            stack.push(x);
            str = stack.join("");
            displayPres();
            displayHistory();
            //alert(stack);
        }
        else if (x == "reset") {
        	//alert("shfksd")
        	x = "0";
        	str = "0";
        	stack = [];
        	CE();
        	displayPres();
        	displayHistory();
        }
        else{
        	evaluate();
        }
        }
        function displayHistory() {
        	$('#history').text(str);
        }
        function displayPres() {
        	var y = stack[stack.length - 1];
        	$('#entry').text(y);
        }

      	function evaluate() {
      		/*for (var i = stack.length - 1; i>=0; i--) {
      			console.log(stack[i]);
      		}*/
      		var evalStr = stack.join("");
      		stack = evalStr.split("/");
      		for(a in stack){
      			stack[a].split("*");
      		}
      		console.log(stack);
      		var y = eval(str);
      		y = Math.round(y*1000)/1000;
      		$('#entry').text(y);



      		/*var flattened = stack.reduce(function(a, b) {
      			return a.concat(b);
				});
      		console.log(flattened);*/
      	}

      	function CE() {
      		$('#entry').text("0");
      		$('#history').text("0");
      		stack = [];
      		str = "";
      	}



    });
