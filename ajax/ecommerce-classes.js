class ProductFilters {
  constructor({
    catCode = "",
    genders = "",
    shape = "",
    front_color = "",
    front_material = "",
    brand = "",
    price_min = "",
    price_max = "",
    page ,
    per_page ,
    sortby = "",
    featured = "",
    SearchBy = "",
    latest = "",
  } = {}) {
    this.catCode = catCode;
    this.FilterBy = {
      optics_frames_style: {
        genders,
        shape,
        brand,
      },
      optics_frames_colour: {
        front_color,
      },
      optics_frames_material: {
        front_material,
      },
    };
    this.price_min = price_min;
    this.price_max = price_max;
    this.page = page;
    this.per_page = per_page;
    this.sortby = sortby;
    this.featured = featured;
    this.SearchBy = SearchBy;
    this.latest = latest;
  }
}
