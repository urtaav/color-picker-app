function ColorPicker({
  color,
  setColor,
}: {
  color: string;
  setColor: (color: string) => void;
}) {
  function handleColorChange(event: { target: { value: string } }) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="card">
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
      </div>

      <label htmlFor="">Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;
