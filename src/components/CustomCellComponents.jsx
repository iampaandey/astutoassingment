import React from 'react';
import { Box, Chip, Typography, Avatar, Checkbox } from '@mui/material';

//creates the checkbox components
export const CheckboxCell = () => <Checkbox />;

// username with avataar section
export const NameWithAvatarCell = ({ cell }) => (
  <Box display="flex" alignItems="center">
    <Avatar src={`https://i.pravatar.cc/150?img=${cell.row.index + 1}`} />
    <Box ml={2}>
      <Typography variant="body1" fontWeight="bold">
        {cell.getValue()}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        @{cell.getValue()}
      </Typography>
    </Box>
  </Box>
);

//status of individual
export const StatusCell = ({ cell }) => (
  <Chip
    label={cell.getValue()}
    style={{
      backgroundColor: '#CCE6FF',
      color: '#0284C7',
      borderRadius: '9999px',
    }}
  />
);

// teams the user is in section
export const TeamsCell = ({ cell }) => {
  const teams = cell.getValue();
  return (
    <Box>
      {teams.slice(0, 3).map((team, index) => {
        let backgroundColor = '';
        let textColor = '';
        if (index === 0) {
          backgroundColor = '#CCE6FF';
          textColor = '#0284C7';
        } else if (index === 1) {
          backgroundColor = '#99CCFF';
          textColor = '#000000';
        } else if (index === 2) {
          backgroundColor = '#66B3FF';
          textColor = '#000000';
        }
        return (
          <Chip
            key={index}
            label={team}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              borderRadius: '9999px',
              marginRight: '2px',
            }}
          />
        );
      })}
      {teams.length > 3 && (
        <Chip
          label={`+${teams.length - 3}`}
          style={{
            backgroundColor: '#66B3FF',
            color: '#000000',
            borderRadius: '9999px',
          }}
        />
      )}
    </Box>
  );
};
