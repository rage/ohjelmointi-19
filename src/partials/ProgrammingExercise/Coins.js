import React, { Fragment, Component } from "react"
import styled from "styled-components"
import { fetchProgrammingExerciseModelSolution } from "../../services/moocfi"
import { Button, Paper, Card, CardContent } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { withTranslation, Trans } from "react-i18next"

const ModalContent = styled(Paper)`
  padding: 5rem;
  overflow-y: scroll;
  max-height: 100vh;
`

const TokenContainer = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 1rem;
    color: #2e3032;
  }
`

class Coins extends Component {
  state = {
    exerciseDetails: undefined,
    modelSolutionModalOpen: false,
    modelSolution: undefined,
    render: false,
  }

  onShowModelSolution = async () => {
    try {
      let modelSolution = this.state.modelSolution
      if (!modelSolution) {
        modelSolution = await fetchProgrammingExerciseModelSolution(
          this.props.exerciseDetails.id,
        )
      }

      this.setState({ modelSolutionModalOpen: true, modelSolution })
    } catch (err) {
      console.error("Could not fetch model solution", err)
    }
  }

  onModelSolutionModalClose = () => {
    this.setState({ modelSolutionModalOpen: false })
  }

  render() {
    const { exerciseDetails, nocoins } = this.props

    if (nocoins) {
      return <TokenContainer>{this.props.t("noCoin")}</TokenContainer>
    }

    if (!exerciseDetails.email_verified) {
      return (
        <TokenContainer>
          {this.props.t("modelSolutionUnavailableBecauseEmailNotVerified")}
        </TokenContainer>
      )
    }
    const tokenThreshHold =
      exerciseDetails?.course
        ?.grant_model_solution_token_every_nth_completed_exercise
    //const _totalTokens = exerciseDetails?.course?.total_model_solution_tokens
    const availableTokens =
      exerciseDetails?.course?.available_model_solution_tokens
    const modelSolutionTokenUsedOnThisExercise =
      exerciseDetails?.model_solution_token_used_on_this_exercise
    return (
      <div>
        {tokenThreshHold && (
          <Fragment>
            <TokenContainer>
              <p>{this.props.t("whyCoin")}</p>
              <p>
                {this.props.t("getNewCoin")} <i>{tokenThreshHold}</i>
                {this.props.t("getNewCoin2")}{" "}
                {availableTokens === 1 ? (
                  <span>{this.props.t("oneCoin")} </span>
                ) : availableTokens > 0 ? (
                  <span>
                    {" "}
                    <Trans i18nKey="howManyCoins" count={availableTokens}>
                      {this.props.t("howManyCoins")}
                    </Trans>
                  </span>
                ) : (
                  <span>{this.props.t("nocoins")}</span>
                )}
              </p>
              <p>{this.props.t("howCoins")}</p>

              {(availableTokens > 0 ||
                modelSolutionTokenUsedOnThisExercise) && (
                <Button
                  onClick={this.onShowModelSolution}
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "0.5rem" }}
                >
                  {this.props.t("seeSolution")}s (
                  {modelSolutionTokenUsedOnThisExercise
                    ? this.props.t("coinUsed")
                    : this.props.t("usesCoin")}
                  )
                </Button>
              )}

              <Button variant="outlined" onClick={this.props.onUpdate}>
                {this.props.t("update")}
              </Button>
            </TokenContainer>

            <Modal
              open={this.state.modelSolutionModalOpen}
              onClose={this.onModelSolutionModalClose}
            >
              {this.state.modelSolution && (
                <ModalContent>
                  <h1>{this.props.t("solution")}</h1>
                  {this.state.modelSolution.solution.files.map((fileEntry) => {
                    return (
                      <Card>
                        <CardContent>
                          <h2>{fileEntry.path}</h2>
                          <pre class="language-java">{fileEntry.contents}</pre>
                        </CardContent>
                      </Card>
                    )
                  })}
                </ModalContent>
              )}
            </Modal>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withTranslation("common")(withSimpleErrorBoundary(Coins))
