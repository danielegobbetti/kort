Ext.data.JsonP.Ext_draw_TextMeasurer({"subclasses":[],"parentMixins":[],"aliases":{},"code_type":"ext_define","html_meta":{},"inheritable":null,"uses":["Ext.draw.engine.Canvas"],"alternateClassNames":[],"override":null,"extends":"Ext.Base","tagname":"class","requires":[],"files":[{"href":"TextMeasurer.html#Ext-draw-TextMeasurer","filename":"TextMeasurer.js"}],"superclasses":["Ext.Base"],"singleton":true,"members":{"cfg":[],"method":[{"owner":"Ext.draw.TextMeasurer","tagname":"method","name":"actualMeasureText","id":"method-actualMeasureText","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"callOverridden","id":"method-callOverridden","meta":{"protected":true,"deprecated":{"text":"Use callParent instead"}}},{"owner":"Ext.Base","tagname":"method","name":"callParent","id":"method-callParent","meta":{"protected":true}},{"owner":"Ext.Base","tagname":"method","name":"callSuper","id":"method-callSuper","meta":{"protected":true}},{"owner":"Ext.Base","tagname":"method","name":"destroy","id":"method-destroy","meta":{"protected":true}},{"owner":"Ext.Base","tagname":"method","name":"getConfig","id":"method-getConfig","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"getCurrentConfig","id":"method-getCurrentConfig","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"getInitialConfig","id":"method-getInitialConfig","meta":{}},{"owner":"Ext.Base","tagname":"method","name":"hasConfig","id":"method-hasConfig","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"initConfig","id":"method-initConfig","meta":{"protected":true}},{"owner":"Ext.Base","tagname":"method","name":"link","id":"method-link","meta":{"private":true}},{"owner":"Ext.draw.TextMeasurer","tagname":"method","name":"measureText","id":"method-measureText","meta":{}},{"owner":"Ext.draw.TextMeasurer","tagname":"method","name":"measureTextSingleLine","id":"method-measureTextSingleLine","meta":{}},{"owner":"Ext.Base","tagname":"method","name":"onConfigUpdate","id":"method-onConfigUpdate","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"setConfig","id":"method-setConfig","meta":{"private":true}},{"owner":"Ext.Base","tagname":"method","name":"statics","id":"method-statics","meta":{"protected":true}},{"owner":"Ext.Base","tagname":"method","name":"unlink","id":"method-unlink","meta":{"private":true}}],"property":[{"owner":"Ext.draw.TextMeasurer","tagname":"property","name":"measureCache","id":"property-measureCache","meta":{"private":true}},{"owner":"Ext.draw.TextMeasurer","tagname":"property","name":"measureDiv","id":"property-measureDiv","meta":{"private":true}},{"owner":"Ext.Base","tagname":"property","name":"self","id":"property-self","meta":{"protected":true}}],"css_var":[],"event":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"css_var":[],"event":[],"css_mixin":[]},"private":null,"component":false,"mixins":[],"name":"Ext.draw.TextMeasurer","linenr":1,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.draw.TextMeasurer</strong></div></div><h4>Uses</h4><div class='dependency'><a href='#!/api/Ext.draw.engine.Canvas' rel='Ext.draw.engine.Canvas' class='docClass'>Ext.draw.engine.Canvas</a></div><h4>Files</h4><div class='dependency'><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer' target='_blank'>TextMeasurer.js</a></div></pre><div class='doc-contents'><p>Utility class to provide a way to <em>approximately</em> measure the dimension of texts without a drawing context.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-measureCache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.TextMeasurer'>Ext.draw.TextMeasurer</span><br/><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer-property-measureCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.TextMeasurer-property-measureCache' class='name expandable'>measureCache</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-measureDiv' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.TextMeasurer'>Ext.draw.TextMeasurer</span><br/><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer-property-measureDiv' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.TextMeasurer-property-measureDiv' class='name not-expandable'>measureDiv</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); // dependent on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-actualMeasureText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.TextMeasurer'>Ext.draw.TextMeasurer</span><br/><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer-method-actualMeasureText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.TextMeasurer-method-actualMeasureText' class='name expandable'>actualMeasureText</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> text, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> font</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Measure the size of a text with specific font by using DOM to measure it. ...</div><div class='long'><p>Measure the size of a text with specific font by using DOM to measure it.\nCould be very expensive therefore should be used lazily.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>font</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object with <code>width</code> and <code>height</code> properties.</p>\n<ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='deprecated signature' >deprecated</strong><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override,\n\nThis method is deprecated as callParent does ...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a>,</p>\n\n<p>This method is deprecated as <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> does the same thing.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Use callParent instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10));     // alerts 10\n alert(My.Derived2.method(10)); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10)); // now alerts 40\n</code></pre>\n\n<p>To override a method and replace it and also call the superclass method, use\n<a href=\"#!/api/Ext.Base-method-callSuper\" rel=\"Ext.Base-method-callSuper\" class=\"docClass\">callSuper</a>. This is often done to patch a method to fix a bug.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-callSuper' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callSuper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callSuper' class='name expandable'>callSuper</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>This method is used by an override to call the superclass method but bypass any\noverridden method. ...</div><div class='long'><p>This method is used by an override to call the superclass method but bypass any\noverridden method. This is often done to \"patch\" a method that contains a bug\nbut for whatever reason cannot be fixed directly.</p>\n\n<p>Consider:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Ext.some.Class', {\n     method: function () {\n         console.log('Good');\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Ext.some.DerivedClass', {\n     method: function () {\n         console.log('Bad');\n\n         // ... logic but with a bug ...\n\n         this.callParent();\n     }\n });\n</code></pre>\n\n<p>To patch the bug in <code>DerivedClass.method</code>, the typical solution is to create an\noverride:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('App.paches.DerivedClass', {\n     override: 'Ext.some.DerivedClass',\n\n     method: function () {\n         console.log('Fixed');\n\n         // ... logic but with bug fixed ...\n\n         this.callSuper();\n     }\n });\n</code></pre>\n\n<p>The patch method cannot use <code>callParent</code> to call the superclass <code>method</code> since\nthat would call the overridden method containing the bug. In other words, the\nabove patch would only produce \"Fixed\" then \"Good\" in the console log, whereas,\nusing <code>callParent</code> would produce \"Fixed\" then \"Bad\" then \"Good\".</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callSuper(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the superclass method</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.mixin.Observable-method-destroy' rel='Ext.mixin.Observable-method-destroy' class='docClass'>Ext.mixin.Observable.destroy</a>, <a href='#!/api/Ext.Container-method-destroy' rel='Ext.Container-method-destroy' class='docClass'>Ext.Container.destroy</a>, <a href='#!/api/Ext.draw.sprite.Sprite-method-destroy' rel='Ext.draw.sprite.Sprite-method-destroy' class='docClass'>Ext.draw.sprite.Sprite.destroy</a>, <a href='#!/api/Ext.dataview.DataView-method-destroy' rel='Ext.dataview.DataView-method-destroy' class='docClass'>Ext.dataview.DataView.destroy</a></p></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCurrentConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getCurrentConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getCurrentConfig' class='name expandable'>getCurrentConfig</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed</div><div class='description'><div class='short'>Returns the initial configuration passed to constructor. ...</div><div class='long'><p>Returns the initial configuration passed to constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>When supplied, value for particular configuration\noption is returned, otherwise the full config object is returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-hasConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-hasConfig' class='name expandable'>hasConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> instanceConfig</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-link' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-link' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-link' class='name expandable'>link</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value</span> ) : Mixed<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-measureText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.TextMeasurer'>Ext.draw.TextMeasurer</span><br/><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer-method-measureText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.TextMeasurer-method-measureText' class='name expandable'>measureText</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> text, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> font</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Measure a text with specific font. ...</div><div class='long'><p>Measure a text with specific font.\nThis will split the text to lines and add up their size.\nThat may <em>not</em> be the exact size of the text as it is displayed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>font</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object with <code>width</code> and <code>height</code> properties.</p>\n<ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-measureTextSingleLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.TextMeasurer'>Ext.draw.TextMeasurer</span><br/><a href='source/TextMeasurer.html#Ext-draw-TextMeasurer-method-measureTextSingleLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.TextMeasurer-method-measureTextSingleLine' class='name expandable'>measureTextSingleLine</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> text, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> font</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Measure a single-line text with specific font. ...</div><div class='long'><p>Measure a single-line text with specific font.\nThis will split the text to characters and add up their size.\nThat may <em>not</em> be the exact size of the text as it is displayed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>font</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object with <code>width</code> and <code>height</code> properties.</p>\n<ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-onConfigUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-onConfigUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onConfigUpdate' class='name expandable'>onConfigUpdate</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> names, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> callback, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> applyIfNotSet</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>applyIfNotSet</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self();                    // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unlink' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-unlink' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-unlink' class='name expandable'>unlink</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","inheritdoc":null,"enum":null,"id":"class-Ext.draw.TextMeasurer","mixedInto":[],"meta":{}});