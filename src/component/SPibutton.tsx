import IconButton from "@mui/material/IconButton";
export default function SPIconButton(props: any) {
  let { label, style, onClick } = props;
  return (
    <div>
      <IconButton style={style} onClick={onClick}>
        {label}
      </IconButton>
    </div>
  );
}
