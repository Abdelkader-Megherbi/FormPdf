import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import jsPDF from "jspdf";

export default function FormHook() {
  const [name, setName] = useState("kader");
  const [lastName, setLastName] = useState("dashing");

  const generatePDF = () => {
    const inputForm = document.getElementById("form");
    const pdf = new jsPDF("p", "mm", "a4");

  const formElements = inputForm.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.tagName === "INPUT") {
      const label = document.querySelector(`label[for="${element.id}"]`);
      const labelText = label ? label.innerText : "";
      const inputValue = element.value.trim(); // Trim the input value to remove leading/trailing spaces
      if (inputValue) {
        pdf.text(15, 15 + i * 10, labelText + ": " + inputValue);
      }
    }
  }


    pdf.save("form_data.pdf");
  };

  return (
    <form id="form">
      <FormControl>
        <FormLabel htmlFor="name">amir name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="lastname">Last name</FormLabel>
        <Input
          id="lastname"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="xxx">fethi</FormLabel>
        <Input
          id="xxx"
          placeholder="lastname"
     
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="button" onClick={generatePDF}>
        Submit
      </Button>
    </form>
  );
}
