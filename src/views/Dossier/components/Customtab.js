import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { randomStatusOptions, randomPrice, randomCommodity } from '@mui/x-data-grid-generator';

const rows = [
  {
    id: "1234557",
    Client: "Mohammed ichou",
    Telephone: "0770636099",
    Provenance: "call center",
    statutduprospect : "Dossier OK",
    statut : "entrée a faire",
    intitulé : "wordpress",
    entrée : "13.12.2023",
    sortie : "13.12.2023",
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
          { field: 'ID',type : 'string' ,width: 130 },
          { field: 'Client', type: 'string', width : 100},
          { field: 'Telephone', type: 'number' },
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