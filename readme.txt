GreaseMonkey support for MooTools Request
================================================================================

The GreaseMonkey XMLHttpRequest functionality is annoyingly different
from the way that it is implemented in popular JavaScript libraries. This
file allows you to use the regular MooTools Request class. This
modification will transparently use GM_xmlHttpRequest as the
transport.

You should append this to a version of MooTools-Core built from the
ShiftSpace fork of MooTools-Core.
