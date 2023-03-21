import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useHistory } from "react-router";

const NewFoodForm = ({ add, setIsLoading }) => {
  const history = useHistory();
  const INITIAL_FORM_DATA = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snack",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ ...formData });
    setFormData(INITIAL_FORM_DATA);
    history.push("/");
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="type">Type:</Label>
        <Input
          type="select"
          name="type"
          id="type"
          placeholder="Type of Food Item"
          value={formData.type}
          onChange={handleChange}
        >
          <option>snack</option>
          <option>drink</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name of Food Item"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description:</Label>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Brief Description of Food Item"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe:</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          placeholder="Recipe of Food Item"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve:</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          placeholder="How to Serve the Food Item"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Create Menu Item!</Button>
    </Form>
  );
};

export default NewFoodForm;
