import { useState } from "react";

import { KeyboardArrowDown, Tune } from "@mui/icons-material/";
import {
  RadioGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  Radio,
  Slider,
  Typography,
  Button,
} from "@mui/material";

function valuetext(value: number) {
  return `$RS${value}`;
}

const Filter = () => {
  const [value, setValue] = useState<number[]>([0, 100]);

  const handleSlideChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <FormControl className="filter-section">
      <Button variant="contained" type="submit">
        Filter
        <Tune />
      </Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDown />}
          id="food-categories"
        >
          All Categories
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup>
            <FormControlLabel
              value="fresh-fruit"
              control={<Radio />}
              label="Frutas Frescas"
            />
            <FormControlLabel
              value="vegetables"
              control={<Radio />}
              label="Vegetais"
            />
            <FormControlLabel
              value="cooking"
              control={<Radio />}
              label="Culinária"
            />
            <FormControlLabel
              value="snacks"
              control={<Radio />}
              label="Lanches"
            />
            <FormControlLabel
              value="beverages"
              control={<Radio />}
              label="Bebidas"
            />
            <FormControlLabel
              value="beauty-and-health"
              control={<Radio />}
              label="Beleza & Saúde"
            />
            <FormControlLabel value="breads" control={<Radio />} label="Pães" />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<KeyboardArrowDown />} id="price-filter">
          Preço
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={value}
            onChange={handleSlideChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1000}
            disableSwap
          />
          <Typography variant="body1">Preço: R${value[0]}</Typography>
          <Typography variant="body1">- R${value[1]}</Typography>
        </AccordionDetails>
      </Accordion>
    </FormControl>
  );
};

export default Filter;
