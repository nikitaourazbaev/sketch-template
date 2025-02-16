import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';
import morph from '@alpinejs/morph';

Alpine.plugin(intersect);
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(morph);

window.Alpine = Alpine;

setTimeout(() => {
  Alpine.start();
});