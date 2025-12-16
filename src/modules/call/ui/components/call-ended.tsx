// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export const CallEnded = () => {
// return (
//         <div className="flex flex-col items-center justify-center h-full bg-radial from-sidebar-accent to-sidebar">
//             <div className="py-4 px-8 flex flex-1 items-center justify-center">
//                 <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
//                     <div className="flex flex-col gap-y-2 text-center">
//                         <h6 className="text-lg font-medium">You have Ended the Call</h6>
//                         <p className="text-sm">Summary will appear in a few minutes.</p>
//                     </div>
//                         <Button asChild>
//                             <Link href="/meetings" >
//                             Back to Meetings
//                             </Link>
//                         </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };



import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, FileText } from "lucide-react";

export const CallEnded = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-radial from-sidebar-accent to-sidebar">
      <div className="py-6 px-8 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-8 bg-background rounded-xl p-10 shadow-md max-w-md w-full">

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-y-3 text-center">
            <h6 className="text-xl font-semibold">Call Ended Successfully</h6>
            <p className="text-sm text-muted-foreground">
              Thanks for joining the meeting. Your session has ended and all
              data is being processed.
            </p>
          </div>

          {/* Status info */}
          <div className="w-full flex flex-col gap-y-3 text-sm bg-muted rounded-lg p-4">
            <div className="flex items-center gap-x-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>Summary will be available in a few minutes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span>Recording and notes will be attached automatically</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-x-3 w-full">
            <Button asChild className="flex-1">
              <Link href="/meetings">Back to Meetings</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/meetings">Go to Dashboard</Link>
            </Button>
          </div>

          {/* Footer hint */}
          <p className="text-xs text-muted-foreground text-center">
            You can revisit this meeting anytime from your meetings history.
          </p>

        </div>
      </div>
    </div>
  );
};
