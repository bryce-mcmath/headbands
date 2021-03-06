import styled from 'styled-components';

const STextArea = styled.textarea`
	display: flex;
	background: #f1f2f1;
	font-family: inherit;
	width: 96%;
	padding: 2%;
	border: none;
	border-radius: 3px;
	box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	resize: none;
	min-height: 10vh;

	:active,
	:focus,
	:focus-within {
		border: none;
		outline: none;
	}
`;

export default STextArea;
