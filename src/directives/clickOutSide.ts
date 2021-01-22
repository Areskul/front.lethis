// export const clickOutSide = {
//   // Directive for outside click detections
//   time: 0, // need a delay when it come together with 'v-if'
//   bind: function() {
//     // make a event handler for click event
//     this.evt = (e) => {
//       // Is the target child of the component?
//       const itsChildren = this.el.contains(e.target);

//       // Delay to let Vue evaluate v-if directive
//       if (this.arg == "delay") {
//         this.time++;
//         if (this.time > 1) {
//           // if 'v-if' has been evaulated

//           // then check the current click target element
//           // if same with directive element,
//           // call function from vm which is has a same name with the directive expression
//           if (e.target != this.el && !itsChildren)
//             this.vm.$eval(this.expression)();
//         }
//       }
//       // When there is no delay, usually not followed by v-if, v-show, v-cloak directive
//       else {
//         if (e.target != this.el && !itsChildren)
//           this.vm.$eval(this.expression)();
//       }
//     };
//     // Attach Event Listener to body
//     document.body.addEventListener("click", this.evt, false);
//   },

//   unbind: function() {
//     // Remove Event Listener from body
//     document.body.removeEventListener("click", this.evt, false);
//   },
// };
