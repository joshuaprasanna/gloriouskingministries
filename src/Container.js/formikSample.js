import {
  ErrorMessage,
  Field,
  FieldArray,
  FormikProvider,
  useFormik,
} from "formik";
import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import FieldArrayNew from "../components/FieldArrayNew";
import FormikBasicDetails, {
  ForimBasicDetails,
} from "../components/ForimBasicDetails";
import RegestrationForm from "../RegForm/RegestrationForm";
import {
  formikValidation,
  forrmikInitialValues,
} from "../service/formikService";
//import RegestrationForm from "../RegForm/RegestrationForm";
function FormikSample() {
  const formIk = useFormik({
    initialValues: forrmikInitialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: formikValidation,
  });

  return (
    <>
      <FormikProvider value={formIk}>
        <form onSubmit={formIk.handleSubmit}>
          <RegestrationForm formIk={formIk} message={"test"}></RegestrationForm>
          <Tabs defaultActiveKey="second">
            <Tab eventKey="first" title="Dashboard">
              <FormikBasicDetails
                formIk={formIk}
                message={"testing"}
              ></FormikBasicDetails>
            </Tab>
            <Tab eventKey="second" title="Setting">
              {formIk.values.isEducated == "yes" && (
                <FieldArray name="educationQualifications">
                  {(formikDetails) => {
                    return (
                      <FieldArrayNew
                        formikDetails={formikDetails}
                      ></FieldArrayNew>
                    );
                  }}
                </FieldArray>
              )}
            </Tab>

            <br></br>
            <br></br>

            <button type="submit"> Submit</button>
          </Tabs>
        </form>
      </FormikProvider>
    </>
  );
}

export default FormikSample;
