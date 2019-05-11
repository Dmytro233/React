import React from "react";

class AddFishForm extends React.Component {
  createFish = event => {
    // 1. Stop the form from submiting
    event.preventDefault();

    const fish = {
      name: this.nameRef.value,
      price: parseFloat(this.priceRef.value),
      status: this.statusRef.value,
      desc: this.descRef.value,
      image: this.imageRef.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          ref={nameRef => (this.nameRef = nameRef)}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          ref={priceRef => (this.priceRef = priceRef)}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={statusRef => (this.statusRef = statusRef)}>
          <option value="avaliable">Fresh!</option>
          <option value="unavaliable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={descRef => (this.descRef = descRef)}
          placeholder="Desc"
        />
        <input
          name="image"
          ref={imageRef => (this.imageRef = imageRef)}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
