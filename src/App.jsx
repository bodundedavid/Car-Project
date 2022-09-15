import './app.scss';

// Components
import 
{
  CarButton, 
  CarFromGroup, 
  CarDataTable, 
  CarInputText, 
  CarTextArea, 
  CarNumberInput
} from './components/index'

// For validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Grid imports
import {Grid, Column} from '@carbon/react'

import { useState } from 'react';



function App() {

  const headers=[
    {
      header: 'Model',
      key: 'model'
    },
    {
      header: 'Owner',
      key: 'owner'
    },
    {
      header: 'Description',
      key: 'description'
    },
    {
      header: 'Price',
      key: 'amount'
    },
  ]

  const [rows, setrows] = useState([])

  const schema = yup
    .object()
    .shape({
        model: yup.string().min(3).required(),
        owner: yup.string().min(3).required(),
        description: yup.string().required(),
        amount: yup.number().positive().min(0).max(99999999).required(),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);

        data.id = `${rows.length}`

        setrows([...rows, data])
    }


    
  return (

    <Grid>
      <Column lg={8} md={4} sm={4}>
        <form onSubmit={handleSubmit(submitForm)}>
            <CarFromGroup legendText="Car registration Form">
              <CarInputText 
                labelText='Car Model'
                name='model'
                id='model'
                type='text'
                invalid={errors.model}
                invalidText={errors.model?.message}
                theref={register('model')} 
                />

              <CarInputText 
                labelText='Car Owner'
                name='owner'
                id='owner'
                type='text'
                invalid={errors.owner}
                invalidText={errors.owner?.message}
                theref={register('owner')} 
                />

              <CarTextArea 
                labelText='Car Description'
                name='description'
                id='description'
                invalid={errors.description}
                invalidText={errors.description?.message}
                theref={register('description')} 
                />

              <CarNumberInput
                name="amount"
                id="amount"
                label="Car price"
                max={99999999}
                min={0}
                size="md"
                value={12}
                invalid={errors.amount}
                invalidText={errors.amount?.message}
                theref={register('amount')} 
                />

              <CarButton type="submit" children="submit" size="md" />

            </CarFromGroup>
        </form>
      </Column>
      <Column lg={8} md={4} sm={4}>
          <CarDataTable
            title="Car Data Entry"
            headers={headers}
            rows={rows}
          />
      </Column>
    </Grid>
  );
}

export default App;
