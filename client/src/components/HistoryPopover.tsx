import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

interface HistoryPopoverProps {
  history?: Array<string>;
}

export const HistoryPopover: React.FC<HistoryPopoverProps> = ({
  history,
}: HistoryPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "history-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <HistoryIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>History</Typography>
        {history?.map((calculation) => {
          return <Typography sx={{ p: 2 }}>{calculation}</Typography>;
        })}
        {!history?.length && (
          <Typography sx={{ p: 2 }}>No History Found...</Typography>
        )}
      </Popover>
    </div>
  );
};
