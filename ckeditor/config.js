/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 CKEDITOR.editorConfig = function( config ) {
 	config.toolbarGroups = [
 		{ name: 'clipboard', groups: [ 'undo', 'clipboard' ] },
 		{ name: 'styles', groups: [ 'styles' ] },
 		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
 		{ name: 'forms', groups: [ 'forms' ] },
 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
 		{ name: 'colors', groups: [ 'colors' ] },
 		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
 		{ name: 'links', groups: [ 'links' ] },
 		{ name: 'insert', groups: [ 'insert' ] },
 		{ name: 'tools', groups: [ 'tools' ] },
 		{ name: 'others', groups: [ 'others' ] },
 		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
 		{ name: 'about', groups: [ 'about' ] }
 	];

 	config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Scayt,Replace,Find,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Iframe,Anchor,PageBreak,Styles,Format,Maximize,ShowBlocks,About';
  config.extraPlugins = 'lineheight';
 };
