EmberDragDrop.SortableObjectsComponent = Ember.Component.extend( {
  dragCoordinator: Ember.inject.service(),
  attributeBindings: ['draggable'],
  draggable: 'true',
  tagName: 'div',
  overrideClass: 'sortable-objects',
  classNameBindings: ['overrideClass'],
  enableSort: true,
  sortableObjectList: Ember.A(),
  dragStart: function() {
    this.set('dragCoordinator.arrayList', this.get('sortableObjectList'));
  },
  dragOver: function() {
    //needed so drop event will fire
    return false;
  },
  drop: function() {
    this.set('sortableObjectList', this.get('dragCoordinator').getChangedArray());
    this.sendAction('sortEndAction');
  }
});
