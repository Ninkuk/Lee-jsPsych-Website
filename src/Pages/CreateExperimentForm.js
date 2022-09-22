import {useNavigate, useParams} from "react-router-dom";
import templatesList from "../TemplateExperiments/TemplatesList";

import StimuliToMultipleChoiceForm from "../TemplateExperiments/StimuliToMultipleChoice/StimuliToMultipleChoiceForm";
import StimuliToAlphabetForm from "../TemplateExperiments/StimuliToAlphabet/StimuliToAlphabetForm";
import React from "react";
import StimuliToNumerical from "../TemplateExperiments/StimuliToNumerical";

function CreateExperimentForm(props) {
	const {experimentType} = useParams();
	let navigate = useNavigate();

	function getFormToLoad() {
		if (experimentType === 'stimuli-to-multiple-choice') {
			return <StimuliToMultipleChoiceForm/>
		} else if (experimentType === 'stimuli-to-alphabet') {
			return <StimuliToAlphabetForm/>
		} else if (experimentType === 'stimuli-to-numerical') {
			return <StimuliToNumerical/>
		}
	}

	return (
		<div className="container">
			<i className="bi bi-arrow-left opacity-50" style={{fontSize: "x-large"}} role={"button"} onClick={() => {
				navigate("/experiment/new")
			}}></i>

			{
				getFormToLoad()
			}

		</div>
	);
}

export default CreateExperimentForm;
