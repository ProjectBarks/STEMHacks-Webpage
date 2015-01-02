/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseenter", function(sym, e) {
         sym.$('body2').show();
         sym.$('arm-22').show();
         sym.$('arm-12').show();
         sym.$('leg-12').show();
         sym.$('leg-22').show();
         sym.$('logo').hide();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseleave", function(sym, e) {
         sym.$('body2').hide();
         sym.$('arm-22').hide();
         sym.$('arm-12').hide();
         sym.$('leg-12').hide();
         sym.$('leg-22').hide();
         sym.$('logo').show();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$('body2').hide();
         sym.$('arm-22').hide();
         sym.$('arm-12').hide();
         sym.$('leg-12').hide();
         sym.$('leg-22').hide();
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "runner");