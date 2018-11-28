/**
 * strvcom/eslint-config-react
 *
 * @author      Petr Hanák <petr.hanak@strv.com>
 * @copyright   2017 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  plugins: ['jsx-a11y'],

  rules: {
    // Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown,
    // onKeyPress. Coding for the keyboard is important for users with physical disabilities who
    // cannot use a mouse, AT compatibility, and screenreader users.
    'jsx-a11y/click-events-have-key-events': 'warn',

    // elements must have the lang prop.
    'jsx-a11y/html-has-lang': 'warn',

    // Elements with an interactive role and interaction handlers (mouse or key press) must be
    // focusable.
    'jsx-a11y/interactive-supports-focus': [
      'warn',
      {
        tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox'],
      },
    ],

    // Enforce label tags have associated control.
    // @TODO(a11y): Replace with label-has-associated-control
    'jsx-a11y/label-has-for': 'warn',

    // Providing captions for media is essential for deaf users to follow along. Captions should be
    // a transcription or translation of the dialogue, sound effects, relevant musical cues, and
    // other relevant audio information. Not only is this important for accessibility, but can also
    // be useful for all users in the case that the media is unavailable (similar to alt text on an
    // image when an image is unable to load).  The captions should contain all important and
    // relevant information to understand the corresponding media. This may mean that the captions
    // are not a 1:1 mapping of the dialogue in the media content.
    'jsx-a11y/media-has-caption': 'warn',

    // Enforce onmouseover/onmouseout are accompanied by onfocus/onblur. Coding for the keyboard is
    // important for users with physical disabilities who cannot use a mouse, AT compatibility, and
    // screenreader users.
    'jsx-a11y/mouse-events-have-key-events': 'warn',

    // Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause
    // usability issues for sighted and non-sighted users, alike.
    'jsx-a11y/no-autofocus': 'warn',

    // Interactive HTML elements indicate controls in the user interface. Interactive elements
    // include <a href>, <button>, <input>, <select>, <textarea>.  Non-interactive HTML elements
    // and non-interactive ARIA roles indicate content and containers in the user interface.
    // Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>, <li>, <ul> and
    // <ol>.  WAI-ARIA roles should not be used to convert an interactive element to a
    // non-interactive element. Non-interactive ARIA roles include article, banner, complementary,
    // img, listitem, main, region and tooltip.
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'warn',
      {
        tr: ['none', 'presentation'],
      },
    ],

    // Non-interactive HTML elements and non-interactive ARIA roles indicate content and containers
    // in the user interface. A non-interactive element does not support event handlers (mouse and
    // key handlers). Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>,
    // <li>, <ul> and <ol>. Non-interactive WAI-ARIA roles include article, banner, complementary,
    // img, listitem, main, region and tooltip.
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // Non-interactive HTML elements indicate content and containers in the user interface.
    // Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>, <li>, <ul> and
    // <ol>.  Interactive HTML elements indicate controls in the user interface. Interactive
    // elements include <a href>, <button>, <input>, <select>, <textarea>.  WAI-ARIA roles should
    // not be used to convert a non-interactive element to an interactive element. Interactive ARIA
    // roles include button, link, checkbox, menuitem, menuitemcheckbox, menuitemradio, option,
    // radio, searchbox, switch and textbox.
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // Tab key navigation should be limited to elements on the page that can be interacted with.
    // Thus it is not necessary to add a tabindex to items in an unordered list, for example, to
    // make them navigable through assistive technology. These applications already afford page
    // traversal mechanisms based on the HTML of the page. Generally, we should try to reduce the
    // size of the page's tab ring rather than increasing it.
    'jsx-a11y/no-noninteractive-tabindex': [
      'warn',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],

    // Static HTML elements do not have semantic meaning. This is clear in the case of <div> and
    // <span>. It is less so clear in the case of elements that seem semantic, but that do not have
    // a semantic mapping in the accessibility layer. For example <a>, <big>, <blockquote>,
    // <footer>, <picture>, <strike> and <time> -- to name a few -- have no semantic layer mapping.
    // They are as void of meaning as <div>.  The WAI-ARIA role attribute confers a semantic
    // mapping to an element. The semantic value can then be expressed to a user via assistive
    // technology.  In order to add interactivity such as a mouse or key event listener to a static
    // element, that element must be given a role value as well.
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // Avoid positive tabIndex property values to synchronize the flow of the page with keyboard
    // tab order.
    'jsx-a11y/tabindex-no-positive': 'warn',
  },
}
