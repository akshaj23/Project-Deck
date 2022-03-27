import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
// import SearchBar from "../components/SearchBar";
import Projects from "../components/Projects";
import AddIcon from "@mui/icons-material/Add";
import projectPic from "../assets/Projectpic.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Autocomplete, Modal, TextField } from "@mui/material";
import * as authActions from "../store/action/Auth";
import * as projectActions from "../store/action/Project";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import donatePic  from "../assets/Charity-bro-2.png";
import charityPic  from "../assets/Charity-pana.png";
import Footer from "../components/Footer";
import Poverty from "../assets/poverty-2.png";
import poverty from "../assets/poverty.png";
import Donation from "../assets/donation.jpg";
import Stack from '@mui/material/Stack';



export default function LandingScreen() {
	const auth = useSelector((state) => state.Auth);
	const [openDetailsModal, setOpenDetailsModal] = useState(false);
	const [openProjectModal, setOpenProjectModal] = useState(false);
	const [firstName, setFirstNname] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailId, setEmailId] = useState("");
	const [yearOfStudy, setYearofStudy] = useState("");
	const [collegeName, setCollegeName] = useState("");
	const [isLoading,setIsLoading]=useState(false)

	//PROJECT
	const [projectName, setProjectName] = useState("");
	const [category, setCategory] = useState("");
	const [timePeriod, setTimePeriod] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.isAuth && !auth.firstName) {
			setOpenDetailsModal(true);
		}
	}, [auth, setOpenDetailsModal]);

	const onSubmitSignUpDetails = async () => {
		try {
			await dispatch(
				authActions.signupDetails(
					emailId,
					firstName,
					lastName,
					collegeName,
					yearOfStudy,
					auth.token
				)
			);
			setOpenDetailsModal(false);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	const onSubmitProjectDetails = async () => {
		try {
			
			setIsLoading(true)
			await dispatch(
				projectActions.addProject(
					projectName,
					category,
					timePeriod,
					description,
					auth.token
				)
			);
			setIsLoading(false)
			setOpenProjectModal(false);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	const getProjects = useCallback(async () => {
		try {
			setIsLoading(true)
			await dispatch(projectActions.getAllProjects());
			setIsLoading(false)
		} catch (error) {
			console.log(error);
			alert("Something went wrong");
		}
	}, []);

	useEffect(() => {
		getProjects();
	}, []);

	if(isLoading){
		return <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}} >
		<CircularProgress color="primary" />
	</div>
	}

	return (
		<Container>
			<NavBar />
			<SubContainer>
				{/* <div><BigText>Serving meals and smiles <br/> to people in need </BigText>
				<Stack spacing={3} direction="row">
      			<Button size = "large" variant="contained">Contained</Button>
     			<Button size = "large" variant="outlined">Outlined</Button>
   				</Stack>
				</div>
				<div> <img src={donatePic} height="400px" /></div> */}



				<div class="row">
<div class="col-lg-8 tagline">
    <BigText>Serving meals and smiles to people in need.</BigText>
    <button onClick={() => setOpenProjectModal(true)} type="button" class="btn btn-color btn-outline-light bn " >Donate</button>
    <button onClick = "" type="button" class="btn button-color btn-light bn ">Request</button>
</div>
<div class="col-lg-4 right">
<img src={donatePic} height="370px" />
</div>
</div>

				{/* <BigText>Serving meals and smiles to people in need </BigText> */}
				{/* <Button variant="outlined">Request</Button> */}
				{/* <SmallText>Expand your horizon</SmallText> */}
				{/* <SearchBar /> */}
			</SubContainer>

			<section class="stats" id="features">

<div class="container-fluid">

<div class="row">
  <div class="feature-box col-lg-4">
    <img src={Donation} width="100" height="100" alt="" />
    <h3 class="feature-title"><strong>189M</strong></h3>
    <p>People suffering from food shortage.</p>
  </div>

  <div class="feature-box col-lg-4">
    <img class="poverty-img" src={Poverty} width="100" height="100" alt="" />
    <h3 class="feature-title"><strong>0.6%</strong></h3>
    <p>Increase in poverty rate due to lockdown.</p>
  </div>

  <div class="feature-box col-lg-4">
    <img src= {poverty} width="100" height="100" alt="" />
    <h3 class="feature-title"><strong>22%</strong></h3>
    <p>Of the global burden of food insecurity is beared by India.</p>
  </div>
</div>

</div>
</section>

			<SubContainer
				style={{
					height: "70vh",
					backgroundColor: "#fff",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>

				<div>
					<img src={charityPic} height="400px" />
				</div>
				<div>
					<SmallText style={{ color: "#000" }}>Start donating now <br/> </SmallText>
					<Button
						onClick={() => setOpenProjectModal(true)}
						style={{ marginTop: "2rem" }}
						startIcon={<AddIcon />}
						variant="outlined"
						size="large"
					>
						Donate
					</Button>
				</div>
				
			</SubContainer>
			<Projects />
			<Modal
				open={openDetailsModal}
				onClose={() => {
					if (firstName && lastName && emailId && collegeName && yearOfStudy)
						setOpenDetailsModal(false);
				}}
			>
				<ModalContainer>
					<StyledTextField
						value={firstName}
						onChange={(event) => setFirstNname(event.target.value)}
						label="First name"
						variant="standard"
					/>
					<StyledTextField
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
						label="Last name"
						variant="standard"
					/>
					<StyledTextField
						value={emailId}
						onChange={(event) => setEmailId(event.target.value)}
						label="Email ID"
						variant="standard"
					/>
					<StyledTextField
						value={collegeName}
						onChange={(event) => setCollegeName(event.target.value)}
						label="College Name"
						variant="standard"
					/>
					<Autocomplete
						options={countries}
						onChange={(event, newValue) => {
							console.log(newValue);
							setYearofStudy(newValue.label);
						}}
						inputValue={yearOfStudy}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<StyledTextField
								style={{ marginRight: "20px" }}
								{...params}
								label="Year of Study"
								variant="standard"
							/>
						)}
					/>

					<Button
						fullWidth
						variant="contained"
						onClick={() => onSubmitSignUpDetails()}
					>
						Send
					</Button>
				</ModalContainer>
			</Modal>
			<Modal
				open={openProjectModal}
				onClose={() => {
					setOpenProjectModal(false);
				}}
			>
				<ModalContainer>
					<StyledTextField
						value={projectName}
						onChange={(event) => setProjectName(event.target.value)}
						label="Restaurant name"
						variant="standard"
					/>
					<Autocomplete
						options={categories}
						onChange={(event, newValue) => {
							setCategory(newValue.label);
						}}
						inputValue={category}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<StyledTextField
								style={{ marginRight: "20px" }}
								{...params}
								label="Category"
								variant="standard"
							/>
						)}
					/>
					<StyledTextField
						value={timePeriod}
						onChange={(event) => setTimePeriod(event.target.value)}
						label="Expiry date (in days)"
						variant="standard"
					/>
					<StyledTextField
						id="filled-multiline-static"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						label="Description"
						variant="standard"
						multiline
						rows={4}
					/>
					<Button
						fullWidth
						variant="contained"
						onClick={() => onSubmitProjectDetails()}
					>
						Add
					</Button>
				</ModalContainer>
			</Modal>
			<Footer/>
		</Container>
	);
}

const StyledTextField = styled(TextField)`
	margin: 10px;
`;

const ModalContainer = styled.div`
	height: 80vh;
	width: 40vw;
	background-color: #fff;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	/* vertical-align: middle; */
`;

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubContainer = styled.div`
	background-color: #f5e6ff;
	height: 90vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

const BigText = styled.h3`
	color: #692fa2;
	font-size: 3.5rem;
	text-align: left;
`;

const SmallText = styled.h5`
	color: #fff;
	margin: 0;
	font-size: 2rem;
`;

const countries = [
	{ label: "First Year" },
	{ label: "Second Year" },
	{ label: "Third Year" },
	{ label: "Fourth Year" },
	{ label: "Fifth Year" },
];

const categories = [
	{ label: "Food" },
	{ label: "Drinks" },
	{ label: "Toys" },
	{ label: "Books" },
	
	// { label: "" },
];
