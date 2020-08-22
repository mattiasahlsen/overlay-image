## Overlay Image component for Vue
Demo: https://mattiasahlsen.github.io/overlay-image

<div align="center">
  <img src="assets/preview.gif">
</div>

#### Install and import
`npm install overlay-image` or `yarn add overlay-image`

```
<script>
import OverlayImage from 'overlay-image'
...

export default {
...
  components: {
    ...
    OverlayImage,
  }
...
}
</script>
```

#### Usage
##### Single box (300px height)
```vue
<template>
  ...
  <OverlayImage
    :image="require('../assets/my-image.jpg')"
    text="Overlay text"
    @click="$router.push('/link-to')"
    :height="300"
    containerClass="overlay-container overflow-hidden"
    :overlayClass="['overlay', 'p-1']"
    :textClass="{ 'text-gray-200': greyText }"
  >
  ...
</template>
```

##### In a grid (using [tailwind.css](https://tailwindcss.com))

```vue
<template>
  ...
  <div class="grid md:grid-cols-2 grid-cols-1">
    <OverlayImage
      v-for="(link, index) in links"
      :key="index"

      :image="require(`../assets/${link.image}`)"
      :text="link.text"
      @click="$router.push(link.to)"
    />
  </div>
  ...
</template>

<script>
export default {
  ...
  data() {
    return {
      ...
      links: [
        {
          image: 'link1.jpg',
          text: 'Link 1',
          to: '/link1',
        },
        {
          image: 'link2.jpg',
          text: 'Link 2',
          to: '/link2',
        },
        ...
      ]
    }
  }
}
</script>
```

#### Props and event handlers

| Name           | Type    | Default       | Description | Required |
| ---            | ---     | ---           | ---         | ---
| image           | String  | undefined        | The path to the image file. | true |
| text  | String  | '' | The text on the overlay. | false |
| height  | String/Number  | undefined | The height of the box. E.g. `'100%'` or `300` (300px). If you control the height with css, leave this undefined. | false |
| containerClass | String/Array/Object  | undefined | Classes that will be applied to the container div. Same syntax as :class in vue. | false |
| overlayClass | String/Array/Object  | undefined | Classes that will be applied to the overlay div. Same syntax as :class in vue. | false |
| textClass | String/Array/Object  | undefined | Classes that will be applied to the text on the overlay. Same syntax as :class in vue. | false |
| @click  | Function  | undefined | @click handler for the container. | false |
