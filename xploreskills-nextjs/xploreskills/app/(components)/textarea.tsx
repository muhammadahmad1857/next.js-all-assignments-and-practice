export default function TextArea(props: any) {
  return (
    <textarea rows={props.row} placeholder={props.place} required></textarea>
  );
}
