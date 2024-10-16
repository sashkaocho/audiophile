import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 'h1',
          category: 'headphones',
          title: 'XX99 MARK II',
          desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
          img: require('@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'),
          position: 'left',
          isNew: true,
          price: 2999,
          features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. \n\n The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
          galPhoto1: require('@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 1, item: 'Headphone Unit' },
            { qty: 2, item: 'Replacement Earcups' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: '3.5mm 5m Audio Cable' },
            { qty: 1, item: 'Travel Bag' },
          ],
          others: [
            {
              id: 'h2',
              category: 'headphones',
              title: 'XX99 MARK I',
              img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h3',
              category: 'headphones',
              title: 'XX59',
              img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
            },
            {
              id: 's1',
              category: 'speakers',
              title: 'ZX9 SPEAKER',
              img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
            },
          ],
        },
        {
          id: 'h2',
          category: 'headphones',
          title: 'XX99 MARK I',
          desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
          img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
          position: 'right',
          price: 1750,
          features:
            'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
          galPhoto1: require('@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 1, item: 'Headphone Unit' },
            { qty: 2, item: 'Replacement Earcups' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: '3.5mm 5m Audio Cable' },
          ],
          others: [
            {
              id: 'h1',
              category: 'headphones',
              title: 'XX99 MARK II',
              img: require('@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h3',
              category: 'headphones',
              title: 'XX59',
              img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
            },
            {
              id: 's1',
              category: 'speakers',
              title: 'ZX9 SPEAKER',
              img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
            },
          ],
        },
        {
          id: 'h3',
          category: 'headphones',
          title: 'XX59',
          desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
          img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
          position: 'left',
          price: 899,
          features:
            'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
          galPhoto1: require('@/assets/product-xx59-headphones/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-xx59-headphones/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-xx59-headphones/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 1, item: 'Headphone Unit' },
            { qty: 2, item: 'Replacement Earcups' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: '3.5mm 5m Audio Cable' },
          ],
          others: [
            {
              id: 'h1',
              category: 'headphones',
              title: 'XX99 MARK II',
              img: require('@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h2',
              category: 'headphones',
              title: 'XX99 MARK I',
              img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
            },
            {
              id: 's1',
              category: 'speakers',
              title: 'ZX9 SPEAKER',
              img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
            },
          ],
        },
        {
          id: 's1',
          category: 'speakers',
          title: 'ZX9',
          desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
          img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
          position: 'left',
          isNew: true,
          price: 4500,
          features:
            'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
          galPhoto1: require('@/assets/product-zx9-speaker/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-zx9-speaker/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-zx9-speaker/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 2, item: 'Speaker Unit' },
            { qty: 2, item: 'Speaker Cloth Panel' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: '3.5mm 10m Audio Cable' },
            { qty: 1, item: '10m Optical Cable' },
          ],
          others: [
            {
              id: 's2',
              category: 'speakers',
              title: 'ZX7 SPEAKER',
              img: require('@/assets/product-zx7-speaker/desktop/image-product.jpg'),
            },
            {
              id: 'h2',
              category: 'headphones',
              title: 'XX99 MARK I',
              img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h3',
              category: 'headphones',
              title: 'XX59',
              img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
            },
          ],
        },
        {
          id: 's2',
          category: 'speakers',
          title: 'ZX7',
          desc: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
          img: require('@/assets/product-zx7-speaker/desktop/image-product.jpg'),
          position: 'right',
          price: 3500,
          features:
            'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
          galPhoto1: require('@/assets/product-zx7-speaker/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-zx7-speaker/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-zx7-speaker/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 2, item: 'Speaker Unit' },
            { qty: 2, item: 'Speaker Cloth Panel' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: '3.5mm 7.5m Audio Cable' },
            { qty: 1, item: '7.5m Optical Cable' },
          ],
          others: [
            {
              id: 's1',
              category: 'speakers',
              title: 'ZX9 SPEAKER',
              img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
            },
            {
              id: 'h2',
              category: 'headphones',
              title: 'XX99 MARK I',
              img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h3',
              category: 'headphones',
              title: 'XX59',
              img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
            },
          ],
        },
        {
          id: 'e1',
          category: 'earphones',
          title: 'YX1 WIRELESS',
          desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
          img: require('@/assets/product-yx1-earphones/desktop/image-product.jpg'),
          position: 'left',
          isNew: true,
          price: 599,
          features:
            'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
          galPhoto1: require('@/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'),
          galPhoto2: require('@/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'),
          galPhoto3: require('@/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'),
          inBox: [
            { qty: 2, item: 'Earphone Unit' },
            { qty: 6, item: 'Multi-size Earplugs' },
            { qty: 1, item: 'User Manual' },
            { qty: 1, item: 'USB-C Charging Cable' },
            { qty: 1, item: 'Travel Pouch' },
          ],
          others: [
            {
              id: 'h2',
              category: 'headphones',
              title: 'XX99 MARK I',
              img: require('@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'),
            },
            {
              id: 'h3',
              category: 'headphones',
              title: 'XX59',
              img: require('@/assets/product-xx59-headphones/desktop/image-product.jpg'),
            },
            {
              id: 's1',
              category: 'speakers',
              title: 'ZX9 SPEAKER',
              img: require('@/assets/product-zx9-speaker/desktop/image-product.jpg'),
            },
          ],
        },
      ],
      cart: [],
      cartVisibility: false,
      payDialogVisibility: false,
      formIsValid: true,
      name: { value: '', isValid: true },
      email: { value: '', isValid: true },
      phone: { value: '', isValid: true },
      address: { value: '', isValid: true },
      zip: { value: '', isValid: true },
      city: { value: '', isValid: true },
      country: { value: '', isValid: true },
      payment: { value: '', isValid: true },
      emoneyNum: { value: '', isValid: true },
      emoneyPin: { value: '', isValid: true },
    };
  },
  mutations: {
    addToCart(state, payload) {
      let index = state.cart.findIndex(
        (item) => item.title === payload.value.title.value
      );
      if (index === -1) {
        state.cart.push(payload.value);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    showCart(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showPayDialog(state) {
      state.payDialogVisibility = true;
    },
    findItem(state, payload) {
      const cartItem = state.cart.find((item) => item.title === payload.name);
      if (payload.operator === '-' && cartItem.qty !== 1) {
        cartItem.qty--;
        cartItem.price = cartItem.price - cartItem.priceOne;
      } else if (payload.operator === '-') {
        const cartItemIndex = state.cart.indexOf(cartItem);
        state.cart.splice(cartItemIndex, 1);
      } else if (payload.operator === '+') {
        cartItem.qty++;
        cartItem.price = cartItem.price + cartItem.priceOne;
      }
    },
    setName(state, value) {
      state.name = value;
    },
    setEmail(state, value) {
      state.email = value;
    },
    setPhone(state, value) {
      state.phone = value;
    },
    setAddress(state, value) {
      state.address = value;
    },
    setZip(state, value) {
      state.zip = value;
    },
    setCity(state, value) {
      state.city = value;
    },
    setCountry(state, value) {
      state.country = value;
    },
    setPayment(state, value) {
      state.name = value;
    },
    setEmoneyNum(state, value) {
      state.emoneyNum = value;
    },
    setEmoneyPin(state, value) {
      state.emoneyPin = value;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    headphones(state) {
      return state.products.filter((item) => item.category === 'headphones');
    },
    speakers(state) {
      return state.products.filter((item) => item.category === 'speakers');
    },
    earphones(state) {
      return state.products.filter((item) => item.category === 'earphones');
    },
    getCart(state) {
      return state.cart;
    },
    cartQty(state) {
      return state.cart.length;
    },
    cartTotal(state) {
      return state.cart.reduce((total, obj) => obj.price + total, 0);
    },
    grandTotal(state) {
      let totalCart = state.cart.reduce((total, obj) => obj.price + total, 0);
      return totalCart + 50 + Math.round(totalCart * (15 / 100));
    },
    getCartVis(state) {
      return state.cartVisibility;
    },
    getFormIsValid(state) {
      return state.formIsValid;
    },
  },
});

export default store;
