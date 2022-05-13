import React from "react";
import './form.css'

const SignInForm = () => {
  return (
    <>
        <div className="signform pt-5">
      <form class="row g-3" >
        <div class="col-md-4">
          <label for="validationServer01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control "
            id="validationServer01"
            placeholder="First Name"
            required
          />
          {/* <div class="valid-feedback">Looks good!</div> */}
        </div>
        <div class="col-md-4">
          <label for="validationServer02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationServer02"
            placeholder="Last Name"
            required
          />
          {/* <div class="valid-feedback">Looks good!</div> */}
        </div>
        <div class="col-md-4">
          <label for="validationServerUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              placeholder="User Name"
              required
            />
            {/* <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
            </div> */}
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationServer03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="City"
            id="validationServer03"
            aria-describedby="validationServer03Feedback"
            required
          />
          {/* <div id="validationServer03Feedback" class="invalid-feedback">
            Please provide a valid city.
          </div> */}
        </div>
        <div class="col-md-3">
          <label for="validationServer04" class="form-label">
            State
          </label>
          <select
            class="form-select"
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          {/* <div id="validationServer04Feedback" class="invalid-feedback">
            Please select a valid state.
          </div> */}
        </div>
        <div class="col-md-3">
          <label for="validationServer05" class="form-label">
            Zip
          </label>
          <input
            type="text"
            class="form-control"
            id="validationServer05"
            placeholder="Zip Code"
            aria-describedby="validationServer05Feedback"
            required
          />
          {/* <div id="validationServer05Feedback" class="invalid-feedback">
            Please provide a valid zip.
          </div> */}
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback"
              required
            />
            {/* <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label> */}
            <div id="invalidCheck3Feedback" class="feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default SignInForm