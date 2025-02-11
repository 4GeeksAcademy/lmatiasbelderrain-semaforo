import React,{useState} from "react";


//create your first component
const Home = () => {
	const [red,setRed]= useState("secondary")
	const [yellow,setYellow]= useState("secondary")
	const [green,setGreen]= useState("secondary")
	
	function prenderRojo(){
		setRed("danger")
		setYellow("secondary")
		setGreen("secondary")
	}
	function prenderAmarillo(){
		setYellow("warning")
		setRed("secondary")
		setGreen("secondary")
	
	}
	function prenderVerde(){
		setRed("secondary")
		setYellow("secondary")
		setGreen("success")

	}

	return (
		<div className="text-center container">
            <div className="bg-dark p-2"
			style={{width:"120px"}}
			>
				<div className={`bg-${red} rounded-circle`} 
				style={{height:"100px",width:"100px",marginBottom:"5px"}}
				onClick={prenderRojo}
				>
				</div>
				<div className={`bg-${yellow} rounded-circle`}  
				style={{height:"100px",width:"100px",marginBottom:"5px"}}
				onClick={prenderAmarillo}
				>
				</div>
				<div className={`bg-${green} rounded-circle`} 
				style={{height:"100px",width:"100px",marginBottom:"5px"}}
				onClick={prenderVerde}
				>
				</div>
			</div>

			
		</div>
	);
};

export default Home;