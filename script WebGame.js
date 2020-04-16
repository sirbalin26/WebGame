let game = (userMove) => {
			 let computerMove = Math.floor(Math.random() * 3);
			    let matrix=[["Egalitate","Ai castigat","Ai pierdut"],
											["Ai pierdut","Egalitate","Ai castigat"],
											["Ai castigat","Ai pierdut","Egalitate"]];
			    
			    let status = document.getElementById("status");
			    let user = document.getElementById("user");
			    let computer = document.getElementById("computer");
			    switch(userMove){
			    	case 0: user.src ="piatra.png";  break; 
			    	case 1: user.src ="hartie.png";  break;
			    	case 2: user.src ="foarfeca.png";  break;
			    }
			    switch(computerMove){
			    	case 0: computer.src ="piatra.png";  break; 
			    	case 1: computer.src ="hartie.png";  break;
			    	case 2: computer.src ="foarfeca.png";  break;
			    }
			    status.innerHTML = matrix[computerMove][userMove];
			}
