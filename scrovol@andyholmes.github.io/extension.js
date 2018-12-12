'use strict';

// User Menu and Volume Indicator
const AggregateMenu = imports.ui.main.panel.statusArea.aggregateMenu;
const VolumeIndicator = AggregateMenu._volume;

// Scroll Signal Id
var _onScrollEventId = null;


function init() {
}


function enable() {
    // Make the User Menu indicator box reactive so it emits ::scroll-event
    AggregateMenu._indicators.reactive = true;

    // Connect the same handler from the volume indicator to ::scroll-event
    _onScrollEventId = AggregateMenu._indicators.connect(
        'scroll-event',
        VolumeIndicator._onScrollEvent.bind(VolumeIndicator)
    );
}


function disable() {
    // Undo the above
    if (_onScrollEventId) {
        AggregateMenu._indicators.reactive = false;
        AggregateMenu._indicators.disconnect(_onScrollEventId);
        _onScrollEventId = null;
    }
}

