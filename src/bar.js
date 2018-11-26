
import Hello from './Hello.vue'
export default function bar() {
  let hello = document.getElementById('hello');
  hello.innerHTML = '<Hello/>';
}