import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { normalizeExerciseId } from "../../util/strings"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"
const ExerciseSummaryWrapper = styled(Link)`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  display: block;
`

const ExerciseSummary = ({ exercise, index, quizIdToTitle, t }) => {
  let description = t("unknownType")
  if (exercise.type === "quiz") {
    const name = quizIdToTitle[exercise.id]
    if (name) {
      description = `${t("quiz")} ${name}`
    } else {
      description = t("quiz")
    }
  }
  if (exercise.type === "programming-exercise") {
    description = `${t("programmingExercise")} ${exercise.id}`
  }
  if (exercise.type === "crowdsorcerer") {
    description = "Crowdsorcerer"
  }
  let anchorLinkDigest = normalizeExerciseId(`${exercise.type}-${exercise.id}`)
  return (
    <ExerciseSummaryWrapper
      to={`${exercise.parentPagePath}#${anchorLinkDigest}`}
    >
      {index + 1}. {description}
    </ExerciseSummaryWrapper>
  )
}

export default withTranslation("common")(
  withSimpleErrorBoundary(ExerciseSummary),
)
