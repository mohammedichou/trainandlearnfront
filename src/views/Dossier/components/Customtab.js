import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { randomStatusOptions, randomPrice, randomCommodity } from '@mui/x-data-grid-generator';

const rows = [
  {
    id: 1,
    Client: "Mohammed ichou",
    Telephone: randomPrice(),
    Provenance: randomPrice(),
    statutduprospect : randomCommodity(),
    statut : randomCommodity(),
    intitulé : randomCommodity(),
    entrée : randomCommodity(),
    sortie : randomCommodity(),
    tarif : randomPrice(),
    observatoire : "",
  },
  {
    id: 2,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice(),
  },
  {
    id: 3,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice(),
  },
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const usdPrice = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  cellClassName: 'font-tabular-nums',
};

const useStyles = makeStyles({
  root: {
    '& .font-tabular-nums': {
      fontVariantNumeric: 'tabular-nums',
    },
  },
});

export default function Customtab() {
  const classes = useStyles();

  return (
    <div style={{ height: 300, width: '100%' }} className={classes.root}>
      <DataGrid
        columns={[
          { field: 'ID', width: 130 },
          { field: 'Client', width: 130},
          { field: 'Telephone', ...usdPrice },
          { field: 'Provenance', ...usdPrice },
          { field: 'statut du prospect', ...usdPrice },
          { field: 'statut', ...usdPrice },
          { field: 'intitulé', ...usdPrice },
          { field: 'entrée', ...usdPrice },
          { field: 'sortie', ...usdPrice },
          { field: 'tarif', ...usdPrice },
          { field: 'Observation', ...usdPrice },
        ]}
        rows={rows}
      />
    </div>
  );
}