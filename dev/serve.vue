<script>
import Vue from 'vue';
import OverlayImage from '@/overlay-image.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    OverlayImage
  },
  data() {
    return {
      examples: [
        {
          img: require('../assets/example_image_1.jpg'),
          text: 'Example 1',
          to: '/example1'
        },
        {
          img: require('../assets/example_image_2.jpg'),
          text: 'Example 2',
          to: '/example2'
        },
        {
          img: require('../assets/example_image_3.jpg'),
          text: 'Example 3',
          to: '/example3'
        },
        {
          img: require('../assets/example_image_4.jpg'),
          text: 'Example 4',
          to: '/example4'
        },
      ]
    }
  },
  methods: {
    clickHandler(example) {
      console.log(example.text + ' clicked')
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="grid">
      <OverlayImage
        v-for="example in examples"
        :key="example.img"
        :image="example.img"
        :text="example.text"
        :to="example.to"
        :height="300"
        @click="() => clickHandler(example)"
      />
    </div>

    <div class="credits">
      <p>Example 1 photo by <a href="https://unsplash.com/@jontyson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jon Tyson</a> on <a href="https://unsplash.com/s/photos/nightclub?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
      <p>Example 2 photo by <a href="https://unsplash.com/@antoinejulien?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Antoine Julien</a> on <a href="https://unsplash.com/s/photos/nightclub?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
      <p>Example 3 photo by <a href="https://unsplash.com/@modeze?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Modesta Žemgulytė</a> on <a href="https://unsplash.com/s/photos/nightclub?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
      <p>Example 4 photo by <a href="https://unsplash.com/@pimmyten?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Pim Myten</a> on <a href="https://unsplash.com/s/photos/nightclub?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
    </div>

  </div>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));;
  }
}

.credits {
  padding: 1em;
  background-color: #262626;
  color: #f2f2f2;
}
.credits p {
  margin: 0;
}
a {
  color: #b3daff;
  transition: color 0.2s ease;
}
a:hover {
  color: #66b5ff;
}
</style>
