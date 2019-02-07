/**
 * strvcom/eslint-config-react
 *
 * @author      Petr Hanák <petr.hanak@strv.com>
 * @copyright   2017 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  plugins: [
    'jsx-a11y',
  ],

  rules: {
    // Emojis have become a common way of communicating content to the end user. To a person using
    // a screenreader, however, he/she may not be aware that this content is there at all. By
    // wrapping the emoji in a <span>, giving it the role="img", and providing a useful description
    // in aria-label, the screenreader will treat the emoji as an image in the accessibility tree
    // with an accessible name for the end user.
    'jsx-a11y/accessible-emoji': 'warn',

    // Enforce that all elements that require alternative text have meaningful information to relay
    // back to the end user. This is a critical component of accessibility for screenreader users
    // in order for them to understand the content's purpose on the page. By default, this rule
    // checks for alternative text on the following elements: <img>, <area>, <input type="image">,
    // and <object>.
    'jsx-a11y/alt-text': 'warn',

    // Enforce that anchors have content and that the content is accessible to screen readers.
    // Accessible means that it is not hidden using the aria-hidden prop. Refer to the references
    // to learn about why this is important.
    'jsx-a11y/anchor-has-content': 'warn',

    // The HTML <a> element, with a valid href attribute, is formally defined as representing a
    // hyperlink. That is, a link between one HTML document and another, or between one location
    // inside an HTML document and another location inside the same document.  In fact, the
    // interactive, underlined <a> element has become so synonymous with web navigation that this
    // expectation has become entrenched inside browsers, assistive technologies such as screen
    // readers and in how people generally expect the internet to behave. In short, anchors should
    // navigate.  The use of JavaScript frameworks and libraries, like React, has made it very easy
    // to add or subtract functionality from the standard HTML elements. This has led to anchors
    // often being used in applications based on how they look and function instead of what they
    // represent.  Whilst it is possible, for example, to turn the <a> element into a fully
    // functional <button> element with ARIA, the native user agent implementations of HTML
    // elements are to be preferred over custom ARIA solutions.
    'jsx-a11y/anchor-is-valid': 'warn',

    // aria-activedescendant is used to manage focus within a composite widget. The element with
    // the attribute aria-activedescendant retains the active document focus; it indicates which of
    // its child elements has secondary focus by assigning the ID of that element to the value of
    // aria-activedescendant. This pattern is used to build a widget like a search typeahead select
    // list. The search input box retains document focus so that the user can type in the input. If
    // the down arrow key is pressed and a search suggestion is highlighted, the ID of the
    // suggestion element will be applied as the value of aria-activedescendant on the input
    // element.  Because an element with aria-activedescendant must be tabbable, it must either
    // have an inherent tabIndex of zero or declare a tabIndex of zero with the tabIndex attribute.
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

    // Elements cannot use an invalid ARIA attribute. This will fail if it finds an aria-* property
    // that is not listed in WAI-ARIA States and Properties spec.
    // (https://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def) ARIA state and
    // property values must be valid.
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',

    // Elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role
    // defintions can be found at WAI-ARIA site.
    // (https://www.w3.org/TR/wai-aria/roles#role_definitions)
    'jsx-a11y/aria-role': 'warn',

    // Certain reserved DOM elements do not support ARIA roles, states and properties. This is
    // often because they are not visible, for example meta, html, script, style. This rule
    // enforces that these DOM elements do not contain the role and/or aria-* props.
    'jsx-a11y/aria-unsupported-elements': 'warn',

    // Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown,
    // onKeyPress. Coding for the keyboard is important for users with physical disabilities who
    // cannot use a mouse, AT compatibility, and screenreader users.
    'jsx-a11y/click-events-have-key-events': 'warn',

    // Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible
    // to screen readers. Accessible means that it is not hidden using the aria-hidden prop. Refer
    // to the references to learn about why this is important.
    'jsx-a11y/heading-has-content': 'warn',

    // elements must have the lang prop.
    'jsx-a11y/html-has-lang': 'warn',

    // <iframe> elements must have a unique title property to indicate its content to the user.
    'jsx-a11y/iframe-has-title': 'warn',

    // Enforce img alt attribute does not contain the word image, picture, or photo. Screenreaders
    // already announce img elements as an image. There is no need to use words such as image,
    // photo, and/or picture.
    'jsx-a11y/img-redundant-alt': 'warn',

    // Elements with an interactive role and interaction handlers (mouse or key press) must be
    // focusable.
    'jsx-a11y/interactive-supports-focus': ['warn', {
      tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox'],
    }],

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

    // Enforce no accessKey prop on element. Access keys are HTML attributes that allow web
    // developers to assign keyboard shortcuts to elements. Inconsistencies between keyboard
    // shortcuts and keyboard commands used by screenreader and keyboard only users create
    // accessibility complications so to avoid complications, access keys should not be used.
    'jsx-a11y/no-access-key': 'warn',

    // Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause
    // usability issues for sighted and non-sighted users, alike.
    'jsx-a11y/no-autofocus': 'warn',

    // Enforces that no distracting elements are used. Elements that can be visually distracting
    // can cause accessibility issues with visually impaired users. Such elements are most likely
    // deprecated, and should be avoided. By default, the following elements are visually
    // distracting: <marquee> and <blink>.
    'jsx-a11y/no-distracting-elements': 'warn',

    // Interactive HTML elements indicate controls in the user interface. Interactive elements
    // include <a href>, <button>, <input>, <select>, <textarea>.  Non-interactive HTML elements
    // and non-interactive ARIA roles indicate content and containers in the user interface.
    // Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>, <li>, <ul> and
    // <ol>.  WAI-ARIA roles should not be used to convert an interactive element to a
    // non-interactive element. Non-interactive ARIA roles include article, banner, complementary,
    // img, listitem, main, region and tooltip.
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['warn', {
      tr: ['none', 'presentation'],
    }],

    // Non-interactive HTML elements and non-interactive ARIA roles indicate content and containers
    // in the user interface. A non-interactive element does not support event handlers (mouse and
    // key handlers). Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>,
    // <li>, <ul> and <ol>. Non-interactive WAI-ARIA roles include article, banner, complementary,
    // img, listitem, main, region and tooltip.
    'jsx-a11y/no-noninteractive-element-interactions': ['warn', {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    }],

    // Non-interactive HTML elements indicate content and containers in the user interface.
    // Non-interactive elements include <main>, <area>, <h1> (,<h2>, etc), <img>, <li>, <ul> and
    // <ol>.  Interactive HTML elements indicate controls in the user interface. Interactive
    // elements include <a href>, <button>, <input>, <select>, <textarea>.  WAI-ARIA roles should
    // not be used to convert a non-interactive element to an interactive element. Interactive ARIA
    // roles include button, link, checkbox, menuitem, menuitemcheckbox, menuitemradio, option,
    // radio, searchbox, switch and textbox.
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['warn', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],

    // Tab key navigation should be limited to elements on the page that can be interacted with.
    // Thus it is not necessary to add a tabindex to items in an unordered list, for example, to
    // make them navigable through assistive technology. These applications already afford page
    // traversal mechanisms based on the HTML of the page. Generally, we should try to reduce the
    // size of the page's tab ring rather than increasing it.
    'jsx-a11y/no-noninteractive-tabindex': ['warn', {
      tags: [],
      roles: ['tabpanel'],
    }],

    // Enforce usage of onBlur over/in parallel with onChange on select menu elements for
    // accessibility. onBlur should be used instead of onChange, unless absolutely necessary and it
    // causes no negative consequences for keyboard only or screen reader users. onBlur is a more
    // declarative action by the user: for instance in a dropdown, using the arrow keys to toggle
    // between options will trigger the onChange event in some browsers. Regardless, when a change
    // of context results from an onBlur event or an onChange event, the user should be notified of
    // the change unless it occurs below the currently focused element.
    'jsx-a11y/no-onchange': 'error',

    // Some HTML elements have native semantics that are implemented by the browser. This includes
    // default/implicit ARIA roles. Setting an ARIA role that matches its default/implicit role is
    // redundant since it is already set by the browser.
    'jsx-a11y/no-redundant-roles': 'warn',

    // Static HTML elements do not have semantic meaning. This is clear in the case of <div> and
    // <span>. It is less so clear in the case of elements that seem semantic, but that do not have
    // a semantic mapping in the accessibility layer. For example <a>, <big>, <blockquote>,
    // <footer>, <picture>, <strike> and <time> -- to name a few -- have no semantic layer mapping.
    // They are as void of meaning as <div>.  The WAI-ARIA role attribute confers a semantic
    // mapping to an element. The semantic value can then be expressed to a user via assistive
    // technology.  In order to add interactivity such as a mouse or key event listener to a static
    // element, that element must be given a role value as well.
    'jsx-a11y/no-static-element-interactions': ['warn', {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    }],

    // Elements with ARIA roles must have all required attributes for that role.
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties
    // supported by that role. Many ARIA attributes (states and properties) can only be used on
    // elements with particular roles. Some elements have implicit roles, such as <a href="#" />,
    // which will resolve to role="link".
    'jsx-a11y/role-supports-aria-props': 'warn',

    // The scope scope should be used only on <th> elements.
    'jsx-a11y/scope': 'warn',

    // Avoid positive tabIndex property values to synchronize the flow of the page with keyboard
    // tab order.
    'jsx-a11y/tabindex-no-positive': 'warn',
  },
}
