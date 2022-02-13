import React from "react";
import styled from "styled-components";

const SignUp = () => {
	return (
		<Wrapper>
			<Join>Join a room to start using Chatty!</Join>
		</Wrapper>
	);
};

export default SignUp;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5rem;
`;
const Join = styled.div``;
